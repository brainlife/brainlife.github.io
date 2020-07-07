const nifti = require('nifti-js');
const fs = require('fs');
const ng = require('node-gzip');
const ndarray = require('ndarray');

const parclabels = require('./parc/label.json');
const parcniigz = fs.readFileSync("parc/parc.nii.gz");

ng.ungzip(parcniigz).then(parcnii=>{
    const parc = nifti.parse(parcnii); 
    const data = ndarray(parc.data, parc.sizes.slice().reverse());
    //console.dir(data);

    let unique_vs = [];

    //initialize parcs object
    let parcs = {};
    parclabels.forEach(label=>{
        parcs[label.label] = {
            name: label.name,
            poss: [],
        };
    });

    //organize all parc voxels by label index
    for(let x = 0;x < data.shape[0]; ++x) {
        for(let y = 0;y < data.shape[0]; ++y) {
            for(let z = 0;z < data.shape[0]; ++z) {
                let v = data.get(x,y,z);
                if(!v) continue;

                if(!unique_vs.includes(v)) unique_vs.push(v);

                /*
                //find label info
                let label = null;
                let idx = null;
                for(let i = 0;i < parclabels.length; ++i) {
                    if(parclabels[i].voxel_value == v) {
                        label = parclabels[i];
                        idx = i;
                        break;
                    }
                }
                if(idx === null) throw "couldn't find voxel_value::"+v;
                */
                let label = parclabels[v];
                parcs[label.label].v = v;
                parcs[label.label].poss.push([x, y, z]);
            }
        }
    }

    //console.dir(parcs);
    //process.exit(1);

    console.log("unique vs", unique_vs.length);
    unique_vs.sort((a,b)=>a-b);
    console.dir(unique_vs);
    //process.exit(1);


    //find centroid
    for(let label in parcs) {
        let sx = null;  
        let sy = null;  
        let sz = null;  
        const len = parcs[label].poss.length;
        parcs[label].poss.forEach(pos=>{
            if(sx === null) {
                sx = pos[0];
                sy = pos[1];
                sz = pos[2];
            } else {
                sx += pos[0];
                sy += pos[1];
                sz += pos[2];
            }
        });
        if(len > 0) parcs[label].centroid = [sx/len, sy/len, sz/len];
    }
    //console.dir(parcs);
    //process.exit(1);

    //find strong parc colleations
    let nodes = {};
    let edges = [];
    const conmatlabels = require('./conmat/label.json');
    const correlation = fs.readFileSync("conmat/correlation.csv", {encoding: "ascii"});
    const rows = correlation.split("\n");

    //console.log("length", rows.length, conmatlabels.length);
    //process.exit(1);

    rows.forEach((row, ridx)=>{
        if(ridx == 0) return;
        let rlabel = conmatlabels[ridx];
        console.log("-----------------");
        console.log(ridx);
        console.dir(rlabel);
        let rparclabel = parclabels.find(l=>l.label == rlabel.voxel_value);
        if(!rparclabel) throw "not found";
        console.dir(rparclabel);
        row.split(",").map(v=>parseFloat(v)).forEach((v, cidx)=>{
            if(cidx <= ridx) return; //ignore bottom half
            if(v < 0.5) return;
            //console.log(ridx, cidx, v);
            let clabel = conmatlabels[cidx];
            //console.log(ridx, rlabel, cidx, clabel);

            /*
            if(!nodes[ridx]) {
                let parc = parcs[rlabel.label];
                if(!parc) {
                    console.log("rlabel.label", rlabel.label, "not there in parcs");
                    return;
                } else {
                    nodes[ridx] = {
                        name: parc.name,
                        centroid: parc.centroid,
                    }
                }
            }
            if(!nodes[cidx]) {
                let parc = parcs[clabel.label];
                if(!parc) {
                    console.log("clabel.label", clabel.label, "not there in parcs");
                    return;
                } else {
                    nodes[cidx] = {
                        name: parc.name,
                        centroid: parc.centroid,
                    }
                }
            }
            */
            //console.log("adding edges");
            //console.dir(rlabel.label, clabel.label);
            //edges.push({from: rlabel.voxel_value, to: clabel.voxel_value, v});
            //console.log(`<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2"/>`);
        });
    });
    //console.dir(nodes);
    //console.dir(edges);

    for(let label in parcs) {
        let parc = parcs[label];
        console.log(`<circle cx="${parc.centroid[0]}" cy="${parc.centroid[1]}" r="2" stroke="green" stroke-width="1" fill="yellow" />`);
    }

    /*
    const out = {
        nodes,
        edges,
    }
    fs.writeFileSync("out.json", JSON.stringify(out, null, 4));
    */
});


