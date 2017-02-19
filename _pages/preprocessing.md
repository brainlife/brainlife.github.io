---
title: "Preprocessing"
subtitle: "Initialize DWI data using vistasoft/dtiInit"
layout: app
starturl: "https://brain-life.org/preprocessing"
permalink: /preprocessing
---

One of the first step for processing your diffusion data often involves with extracting some 
common parameters such as ...

<div style="float: right;">
    <!--<img src="/images/preprocessing/t1.jpg" width="80px;">-->
    <img src="/images/preprocessing/fa.jpg" width="80px;">
    <img src="/images/preprocessing/md.jpg" width="80px;">
    <img src="/images/preprocessing/vector.jpg" width="80px">
</div>

* Fractional Anisotrophy (FA)
* Mean Diffusivity (MD)
* Principla Diffusion Direction
* Brain Mask
* White Matter Mask
* etc..
<br clear="both">

vistasoft/dtiInit is a common tool that allows you to extract these information.
One important output from dtiInit is a file called `dt6.mat`. 
This file contains information used by various other DWI applications; mrDiffusion, FQA, mrTrix, LiFE, etc..

dtInit also performs eddy current correction. [Eddy current](http://mri-q.com/eddy-current-problems.html) is induced when MRI gradients are pulsed on and off rapidly (short TE) which is oftenly the case for DWI. Eddy current creates unwanted image artifacts, and dtiInit can try to correct it.

Please see [here](https://github.com/vistalab/vistasoft/wiki/DWI-Files) for other data products produced by dtiInit.

