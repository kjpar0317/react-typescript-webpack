package com.innogrid.tabcloudit.batch.common;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.batch.core.partition.support.Partitioner;
import org.springframework.batch.item.ExecutionContext;

import com.innogrid.tabcloudit.batch.model.Common;

public class ColumnRangePartitioner implements Partitioner {
	private Long lmin = (long) 0;
	private Long lmax = (long) 0;

	public void init(SqlSessionFactory sqlSessionFactory, String tbName) {
		try(SqlSession sql = sqlSessionFactory.openSession()) {
			Map<String, Object> tmpMap = new ConcurrentHashMap<>();
			tmpMap.put("tableName", tbName);
			
			Common comm = sql.selectOne("com.innogrid.tabcloudit.batch.tiberodb.common.selectMinMax", tmpMap);
			
			if(comm != null) {
				this.lmin = comm.getMin();
				this.lmax = comm.getMax();
			}
		}
	}
	
	public void init(SqlSessionFactory sqlSessionFactory, String tbName, String searchQuery) {
		try(SqlSession sql = sqlSessionFactory.openSession()) {
			Map<String, Object> tmpMap = new ConcurrentHashMap<>();
			tmpMap.put("tableName", tbName);
			tmpMap.put("searchQuery", searchQuery);
			
			Common comm = sql.selectOne("com.innogrid.tabcloudit.batch.tiberodb.common.selectMinMax", tmpMap);
			
			if(comm != null) {
				this.lmin = comm.getMin();
				this.lmax = comm.getMax();
			}
		}
	}
	
	@Override
	public Map<String, ExecutionContext> partition(int gridSize) {
		long targetSize = (this.lmax - this.lmin) / gridSize + 1;
		
		AtomicInteger partitionNumber = new AtomicInteger(1);
		Map<String, ExecutionContext> result = new ConcurrentHashMap<>();

		long start = this.lmin;
		long end = start + targetSize - 1;
	
		while (start <= this.lmax) {
			if (end >= this.lmax) {
				end = this.lmax;
			}

			ExecutionContext value = new ExecutionContext();

			value.putLong("minValue", start);
			value.putLong("maxValue", end);
			result.put("partition" + partitionNumber.getAndIncrement(), value);
			
//			log.info("partition : {}", value);

			start += targetSize;
			end += targetSize;
		}
		
		return result;
	}
}
