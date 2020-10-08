package com.innogrid.tabcloudit.batch.common;

import java.util.HashMap;
import java.util.Map;

import org.springframework.batch.core.partition.support.Partitioner;
import org.springframework.batch.item.ExecutionContext;

public class ColumnRangeStepPartitioner implements Partitioner {
	private Integer min;
	private Integer max;

	@Override
	public Map<String, ExecutionContext> partition(int gridSize) {
		int targetSize = (max - min) / gridSize + 1;

		Map<String, ExecutionContext> result = new HashMap<>();

		int number = 0;
		int start = min;
		int end = start + targetSize - 1;
	
		while (start <= max) {
			if (end >= max) {
				end = max;
			}

			ExecutionContext value = new ExecutionContext();

			value.putInt("minValue", start);
			value.putInt("maxValue", end);
			result.put("partition" + number, value);

			start += targetSize;
			end += targetSize;
			number++;
		}
		return result;
	}
}
