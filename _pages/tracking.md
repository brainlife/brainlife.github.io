---
title: "Tracking"
subtitle: "Produce Predicted Connectomes with Ensemble Tractography"
layout: app
starturl: "https://brain-life.org/tracking"
permalink: /tracking
---

There are many different tractography methods, and each requires the user to select algorithms and to set several parameters. A limitation of tractography is that the results depend on the selection of algorithms and parameters. 

This service uses an *Ensemble Tractography* method. It creates a large set of candidate streamlines using an ensemble of algorithms and parameter values and then selects the streamlines with strong support from the data using a global fascicle evaluation method. 

*Ensemble Tractography* connectomes predict diffusion MRI signals better and cover a wider range of white matter volume then single algorithm and single parameter connectomes.

Currently, the *Ensemble Tractography* service generates the following streamlines and data products using [MRtrix](http://www.mrtrix.org).

* Common
  * brain mask (`brainmask.mif`)
  * white matter mask (`wm.mif`) 

* Diffusion Tensor Fiber-Tracking
  * tensor fitting (`dt.mif`)
  * tensor to FA (`fa.mif`) 
  * response function estimate (`sf.mif`, `response.txt`)
  * DT_STREAM (`output.DT_STREAM.tck`)

* Deterministic/Probabilistic Fiber-Tracking
  * CSD/FOD (`lmax.mif`)
  * deterministic tracks (`output.SD_STREAM.tck`) 
  * probabilistic tracks (`output.SD_PROB.tck`) 

More algorithms will be added soon.

<br>
<h3>Sample Output</h3>
<center>
<img src="/images/screenshots/tracking.png" class="screenshot">
</center>
<br>
