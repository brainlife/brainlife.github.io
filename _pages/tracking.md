---
title: "Tracking"
subtitle: "Produce Predicted Connectomes with Ensemble Tractography"
layout: app
starturl: "https://brain-life.org/tracking"
permalink: /tracking
---

There are many different tractography methods, and each requires the user to set several parameters. A limitation of tractography is that the results depend on the selection of algorithms and parameters. 

This service uses an *Ensemble Tractography* method. It creates a large set of candidate streamlines using an ensemble of algorithms and parameter values and then selects the streamlines with strong support from the data using a global fascicle evaluation method. 

Compared to single parameter connectomes, *Ensemble Tractography* connectomes predict diffusion MRI signals better and cover a wider range of white matter volume. 

Currently this service generates following streamlines and data product using [MRtrix](http://www.mrtrix.org).

* Common
  * brain mask (`brainmask.mif`)
  * white matter mask (`wm.mif`) 

* Diffusion Tensor Fibre-Tracking
  * tensor fitting (`dt.mif`)
  * tensor to FA (`fa.mif`) 
  * response function estimate (`sf.mif`, `response.txt`)
  * DT_STREAM (`output.DT_STREAM.tck`)

* Deterministic/Probabilistic Fibre-Tracking
  * CSD/FOD (`lmax.mif`)
  * deterministic tracks (`output.SD_STREAM.tck`) 
  * probabilistic tracks (`output.SD_PROB.tck`) 

