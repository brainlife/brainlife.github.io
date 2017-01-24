---
title: "Tracking"
subtitle: "Fibre-tracking using MRtrix"
layout: app
starturl: "https://brain-life.org/tracking"
permalink: /tracking
---

This service allows you to submit T1 anatomy as well as your diffusion MRI image and does fibre-tracking using MRtrix. It generates following data products.

* Common
  * brain mask (`brainmask.mif`)
  * white matter mask (`wm.mif`) 

* Diffusion Tensor Fibre-Tracking
  * tensor fitting (`dt.mif`)
  * tensor to FA (`fa.mif`) 
  * response function estimate (`sf.mif`, `response.txt`)
  * DT_STREAM (`output.DT_STREAM.tck`)

* Deterministic/Probabilistic Fibre-Tracking
  * CSD/(FOD (`lmax.mif`)
  * deterministic tracks (`output.SD_STREAM.tck`) 
  * probabilistic tracks (`output.SD_PROB.tck`) 

> [MRtrix](http://www.mrtrix.org) provides a set of tools to perform various advanced diffusion MRI analyses, including constrained spherical deconvolution (CSD), probabilistic tractography, track-density imaging, and apparent fibre density.
