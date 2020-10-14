import moment from 'moment';
import { merge } from 'lodash';

export const getAreaChartData = (data: any) => {
    let arrTemp = new Array();

    let xAxisArr = new Array();

    let dstArr1 = new Array();
    let dstArr2 = new Array();
    let dstArr3 = new Array();
    let dstArr4 = new Array();
    let dstArr5 = new Array();
    let dstArr6 = new Array();
    let dstArr7 = new Array();
    let dstArr8 = new Array();
    let dstArr9 = new Array();
    let dstArr10 = new Array();
    let dstArr11 = new Array();
    let dstArr12 = new Array();
    let dstArr13 = new Array();
    let dstArr14 = new Array();
    let dstArr15 = new Array();
    let dstArr16 = new Array();
    let dstArr17 = new Array();
    let dstArr18 = new Array();
    let dstArr19 = new Array();
    let dstArr20 = new Array();
    let dstArr21 = new Array();
    let dstArr22 = new Array();
    let dstArr23 = new Array();
    let dstArr24 = new Array();
    let dstArr25 = new Array();
    let dstArr26 = new Array();
    let dstArr27 = new Array();
    let dstArr28 = new Array();
    let dstArr29 = new Array();
    let dstArr30 = new Array();
    let dstArr31 = new Array();
    let dstArr32 = new Array();
    let dstArr33 = new Array();
    let dstArr34 = new Array();
    let dstArr35 = new Array();
    let dstArr36 = new Array();
    let dstArr37 = new Array();
    let dstArr38 = new Array();

    data.dates.map((date: number, index: number) => {
        var cdate = moment(date).format('HH:mm');

        xAxisArr.push({date: cdate});

        data.Number1PowerOn &&
            dstArr1.push({
                powerOn: data.Number1PowerOn[index],
            });
        data.Number2PowerOff &&
            dstArr2.push({
                powerOff: data.Number2PowerOff[index],
            });
        data.Number3Suspend &&
            dstArr3.push({
                suspend: data.Number3Suspend[index],
            });
        data.Number4Reset &&
            dstArr4.push({
                reset: data.Number4Reset[index],
            });
        data.Number5RebootGuest &&
            dstArr5.push({
                rebootGuest: data.Number5RebootGuest[index],
            });
        data.Number6StandbyGuest &&
            dstArr6.push({
                standbyGuest: data.Number6StandbyGuest[index],
            });
        data.Number7ShutdownGuest &&
            dstArr7.push({
                shutdownGuest: data.Number7ShutdownGuest[index],
            });
        data.Number8Create &&
            dstArr8.push({
                create: data.Number8Create[index],
            });
        data.Number9Destroy &&
            dstArr9.push({
                destroy: data.Number9Destroy[index],
            });
        data.Number10Register &&
            dstArr10.push({
                register: data.Number10Register[index],
            });
        data.Number11Unregister &&
            dstArr11.push({
                unregister: data.Number11Unregister[index],
            });
        data.Number12Reconfigure &&
            dstArr12.push({
                reconfigure: data.Number12Reconfigure[index],
            });
        data.Number13Clone &&
            dstArr13.push({
                clone: data.Number13Clone[index],
            });
        data.Number14Deploy &&
            dstArr14.push({
                deploy: data.Number14Deploy[index],
            });
        data.Number15ChangeHost &&
            dstArr15.push({
                changeHost: data.Number15ChangeHost[index],
            });
        data.Number16ChangeDS &&
            dstArr16.push({
                changeDS: data.Number16ChangeDS[index],
            });
        data.Number17ChangeHostDS &&
            dstArr17.push({
                changeHostDS: data.Number17ChangeHostDS[index],
            });
        data.Number18VMotion &&
            dstArr18.push({
                vMotion: data.Number18VMotion[index],
            });
        data.Number19SVMotion &&
            dstArr19.push({
                sVMotion: data.Number19SVMotion[index],
            });
        data.Number20XVMotion &&
            dstArr20.push({
                xVMotion: data.Number20XVMotion[index],
            });
        // VM 참조
        data.CPU1Usage &&
            dstArr21.push({
                cpuUsage: data.CPU1Usage[index],
            });
        data.CPU2Mhz &&
            dstArr22.push({
                cpuMhz: data.CPU2Mhz[index],
            });
        data.CPU3Ready &&
            dstArr23.push({
                cpuReady: data.CPU3Ready[index],
            });
        // 클러스터 참조
        data.CPU4Total &&
            dstArr24.push({
                cpuTotal: data.CPU4Total[index],
            });
        data.Memory1Usage &&
            dstArr25.push({
                memoryUsage: data.Memory1Usage[index],
            });
        (data.Memory2SwapInRate || data.Memory2SwapOutRate) &&
            dstArr26.push({
                memorySwapInRate: data.Memory2SwapInRate[index],
                memorySwapOutRate: data.Memory2SwapOutRate[index],
            });
        data.Memory3Balloon &&
            dstArr27.push({
                memoryBalloon: data.Memory3Balloon[index],
            });
        data.Memory4Consumed &&
            dstArr28.push({
                memoryConsumed: data.Memory4Consumed[index],
            });
        data.Memory5Overhead &&
            dstArr29.push({
                memoryOverhead: data.Memory5Overhead[index],
            });
        data.Disk1Usage &&
            dstArr30.push({
                diskUsage: data.Disk1Usage[index],
            });
        data.Disk2MaxTotalLatency &&
            dstArr31.push({
                diskMaxTotalLatency: data.Disk2MaxTotalLatency[index],
            });
        data.Disk3Used &&
            dstArr32.push({
                diskUsed: data.Disk3Used[index],
            });
        data.Disk4Provisioned &&
            dstArr33.push({
                diskProvisioned: data.Disk4Provisioned[index],
            });
        data.Disk5Unshared &&
            dstArr34.push({
                diskUnshared: data.Disk5Unshared[index],
            });
        data.Network1Usage &&
            dstArr35.push({
                networkUsage: data.Network1Usage[index],
            });
        data.System1Uptime &&
            dstArr36.push({
                systemUptime: parseInt(data.System1Uptime[index]),
            });

        data.Cluster1CpuFairness &&
            dstArr37.push({
                clusterCpuFairness: data.Cluster1CpuFairness[index],
            });
        data.Cluster2MemoryFairness &&
            dstArr38.push({
                clusterMemoryFairness: data.Cluster2MemoryFairness[index],
            });

    });

    let dstArr: any = merge(xAxisArr, dstArr1);
    dstArr = merge(dstArr, dstArr2);
    dstArr = merge(dstArr, dstArr3);
    dstArr = merge(dstArr, dstArr4);
    dstArr = merge(dstArr, dstArr5);
    dstArr = merge(dstArr, dstArr6);
    dstArr = merge(dstArr, dstArr7);
    dstArr = merge(dstArr, dstArr8);
    dstArr = merge(dstArr, dstArr9);
    dstArr = merge(dstArr, dstArr10);
    dstArr = merge(dstArr, dstArr11);
    dstArr = merge(dstArr, dstArr12);
    dstArr = merge(dstArr, dstArr13);
    dstArr = merge(dstArr, dstArr14);
    dstArr = merge(dstArr, dstArr15);
    dstArr = merge(dstArr, dstArr16);
    dstArr = merge(dstArr, dstArr17);
    dstArr = merge(dstArr, dstArr18);
    dstArr = merge(dstArr, dstArr19);
    dstArr = merge(dstArr, dstArr20);
    dstArr = merge(dstArr, dstArr21);
    dstArr = merge(dstArr, dstArr22);
    dstArr = merge(dstArr, dstArr23);
    dstArr = merge(dstArr, dstArr24);
    dstArr = merge(dstArr, dstArr25);
    dstArr = merge(dstArr, dstArr26);
    dstArr = merge(dstArr, dstArr27);
    dstArr = merge(dstArr, dstArr28);
    dstArr = merge(dstArr, dstArr29);
    dstArr = merge(dstArr, dstArr30);
    dstArr = merge(dstArr, dstArr31);
    dstArr = merge(dstArr, dstArr32);
    dstArr = merge(dstArr, dstArr33);
    dstArr = merge(dstArr, dstArr34);
    dstArr = merge(dstArr, dstArr35);
    dstArr = merge(dstArr, dstArr36);
    dstArr = merge(dstArr, dstArr37);
    dstArr = merge(dstArr, dstArr38);

    return dstArr;
};
