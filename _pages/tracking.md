---
title: "Ensemble tractography"
subtitle: "Generate brain connectomes using a combination fiber tracking method."
layout: app
starturl: "https://brain-life.org/tracking"
giturl: "https://github.com/brain-life/app-tracking"
permalink: /tracking
---

Automated access to [Compute clouds](https://jetstream-cloud.org) to process diffusion data using multiple tractography methods. This service combines multiple tractography methods by implementing [Ensemble Tractography](https://doi.org/10.1371/journal.pcbi.1004692). It creates a large set of candidate streamlines using an ensemble of algorithms and parameter values and then selects the streamlines with strong support from the data using a global fascicle evaluation method.  *Ensemble Tractography* connectomes predict diffusion MRI signals better and cover a wider range of white matter volume then single algorithm and single parameter connectomes. The *Ensemble Tractography* service tracks using [MRtrix](http://www.mrtrix.org).

* Brain tissue segmentation.
  * Whole brain extraction (`brainmask.mif`)
  * White matter volume identification (`wm.mif`) 

* White matter microstructure tissue properties.
  * Diffusion tensor parameters (`dt.mif`, `fa.mif`) 
  * Constrained spherical deconvolution estimates (`sf.mif`, `response.txt`, `lmax.mif`)

* Fiber tracking.
  * Deterministic (`output.SD_STREAM.tck`) 
  * Probabilistic (`output.SD_PROB.tck`) 
  * Tensor (`output.DT_STREAM.tck`)

<br>
<h3>Sample Output</h3>
<center>
<img src="/images/screenshots/tracking.png" class="screenshot">
</center>
<br>
