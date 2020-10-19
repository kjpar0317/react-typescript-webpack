import React, { useState, useEffect } from 'react';
import { cloneDeep, omit, isEmpty, assign } from 'lodash';

import Graph from "vis-react";

import { EQUIP_SEVER, EQUIP_STORAGE, EQUIP_SECURITY, EQUIP_BACKUP, EQUIP_NETWORK, EQUIP_CIRCUIT, EQUIP_SOFTWARE, EQUIP_DATABASE } from '@/constants';

import server_image from '@/images/topology/server.png';
import storage_image from '@/images/topology/storage.png';
import security_image from '@/images/topology/security.png';
import backup_image from '@/images/topology/backup.png';
import network_image from '@/images/topology/network.png';
import circuit_image from '@/images/topology/circuit.png';
import software_image from '@/images/topology/software.png';
import database_image from '@/images/topology/database.png';
import no_image from '@/images/btn_ico_refresh.png';

interface VisReactTopologyProps {
    width?: string;
    height?: string;
    data: any;
}

const options : any = {
    layout: {
        // hierarchical: true
        randomSeed: 2
    },
    edges: {
        color: '#000000'
    },
    interaction: { hoverEdges: true },
    autoResize: true,
    locale: 'kr'
};

const events: any = {
    select: function(event: any) {
        var { nodes, edges } = event;
    }
};

const VisReactTopology: React.FC<VisReactTopologyProps> = (props) => {
    const { width = '100%', height = '95%', data } = props;
    const [ graph, setGraph] = useState<any>([]);
    const [ network, setNetwork ] = useState<any>();
    const [ edges, setEdges ] = useState<any>();
    const [ nodes, setNodes ] = useState<any>();

    useEffect(() => {
        if(!isEmpty(data) && data.nodes.length > 0) {
            let clonenodes = cloneDeep(data);

            clonenodes.nodes.map((node: any) => {
                switch(node.imageGb) {
                   case EQUIP_SEVER:
                       node.image = server_image;
                       break;
                    case EQUIP_STORAGE:
                        node.image = storage_image;
                        break;
                    case EQUIP_SECURITY:
                        node.image = security_image;
                        break;
                    case EQUIP_BACKUP:
                        node.image = backup_image;
                        break;
                    case EQUIP_NETWORK:
                        node.image = network_image;
                        break;
                    case EQUIP_CIRCUIT:
                        node.image = circuit_image;
                        break;
                    case EQUIP_SOFTWARE:
                        node.image = software_image;
                        break;
                    case EQUIP_DATABASE:
                        node.image = database_image;
                        break;
                    default:
                        node.image = no_image;
                        break;
                };

                node = omit(node, 'imageGb');
            });

            setGraph(clonenodes);
        }
    }, [data]);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            {!isEmpty(graph) && graph.nodes.length > 0 && <Graph
                graph={graph}
                options={options}
                events={events}
                style={{width: width, height: height}}
                getNetwork={network}
                getEdges={edges}
                getNodes={nodes}
                vis={(vis: any) => (vis = vis)}
            />}
        </div>
    );
};

export { VisReactTopology };
