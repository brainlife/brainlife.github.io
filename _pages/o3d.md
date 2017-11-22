---
title: "O3D"
subtitle: "Open Diffusion Data and Derivatives"
layout: app
starturl-dis: "https://brain-life.org/o3d"
permalink: /o3d
---

<br>

# What is O3D

<b>Open Diffusion Data and Derivatives (O3D)</b> is an online repository of data to support the analysis of brain connectivity.

<div style="margin-top: 50px;">
	<div style="float: left; width: 45%;">
		<a href="https://brain-life.org/warehouse/datasets/5a022fc99c0d250055709e9c" class="btn btn-gray">
			<center>
			<h3>O3D Repository</h3>
			<img src="images/o3drepo.png" style="width: 80%; box-shadow: 2px 2px 4px #666;">
			</center>
		</a>

		<p>
		You can download a rich dataset composed of <b>dMRI</b> obtained from healthy, cognitively normal human individuals and <b>derivatives</b> in a BIDS-standard data structure for further analysis.
		</p>

		<!--
		<p>
		The tractography results are evaluated using state-of-the-art methods and standard methods used to segment the major human white matter tracts. Additionally, a series of connection matrices will be generated using standard cortical segmentation methods.
		</p>

		<p>
		The full dataset comprises a few initial data files (12 brains from three different data sets with different properties of signal-to-noise ratio and resolution) and a large set of Derivatives comprising 1,440 tractograms, associated major tracts segmentations and connectomes. 
		</p>

		<p>
		These results comprising of just under 10 Terabytes of compressed data account for about 3 months of compute time on the most modern high-performance compute systems. You can download data organized in <b>BIDS</b> (Brain Imaging Data Structure) standard with Open Data Common Attribution License.
		</p>
		-->
	</div>
	<div style="float: right; width: 45%;">
		<a href="https://brain-life.org/o3d" class="btn btn-gray">
			<center>
			<h3>O3D Pipeline</h3>
			<img src="images/o3dflow.png" style="width: 80%; box-shadow: 2px 2px 4px #666;">
			</center>
		</a>
	
		<p>
		You can reproduce, or generate your own O3D data derivatives through O3D online pipeline by uploading your data to our online workflow submission system.
		</p>
		
		<!--
		<p>
		You need T1-anatomy and DWI data (.nii.gz/bvecs/bvals) to submit the pipeline workflow, and the processing will take about 24-36 hours.
		</p>
		-->

	</div>
</div>
<br clear="both">
<br>

# Who can use it?

<br>

<div class="columns3">

    <center>
        <img src="images/male-brain.svg" style="width: 50%;">
        <h3>Neuroscientists</h3>
    </center>
    
Neuroscientists interested in developing algorithms for community detection and network science on brain network data, without having to process the raw diffusion data into connectivity matrices. Our data set provides a jump-start mechanism by making available unthresholded raw brain connection matrices built in multiple individuals using different tracking methods.

    <br>

    <center>
        <img src="images/binary-code-numbers-on-monitor-screen.svg" style="width: 50%;">
        <h3>Computer Scientists</h3>
    </center>

Computer scientists are interested in implementing algorithms to perform white matter fascicles registration or clustering (REF). Our data set provides multiple sets of human white matter tracts segmented in several subjects with repeated measures and estimates made using multiple tractography methods.

    <br>

    <center>
        <img src="images/group-of-people-in-a-formation.svg" style="width: 50%;">
        <h3>Students</h3>
    </center>

Investigators studying white matter, neuroanatomy, as well as software developers for continuous testing (Dipy, Travis) or MRI physicists could use the data Derivatives as reference given current state-of-the-art methods. Importantly, the Derivatives dataset will be of help for students and beginning neuroimaging trainees. 


</div><!--columns3-->

<br><br><br>

<div class="colorback blueback">

    <h1>Datasources</h1>

    <h2>Stanford datasets</h2>
    <blockquote>
    <p>
        <!--<small class="pull-right">96 gradient directions, $1.5 mm$ isotropic resolution)</small><br>-->
        <b>STN</b><br>
        Ddata collected in four subjects (age 37-39) at the Stanford Center for Cognitive and Neurobiological Imaging with a 3T General Electric Discovery 750 (General Electric Healthcare), using a 32-channel head coil (Nova Medical).
    </p>
    <a href="http://purl.stanford.edu/rt034xr8593" target="_blank">- http://purl.stanford.edu/rt034xr8593</a><br>
    <a href="http://purl.stanford.edu/ng782rw8378" target="_blank">- http://purl.stanford.edu/ng782rw8378</a><br>
    </blockquote>
    
    <br>

    <h2>Human Connectome Projects datasets</h2>
    <blockquote>
    <p>
        <!--<small class="pull-right">(90 gradient directions, 1.25 mm isotropic resolution)</small><br>-->
        <b>HCP3T</b><br>
        Data collected in four subjects at the University of Washington St. Louis as part of the Human Connectome Project, with the Siemens 3T "Connectome."
    </p>

    <p>
        <!--<b>HCP7T</b> (60 gradient directions, $1.05 mm$ isotropic resolution)<br>-->
        <b>HCP7T</b><br>
        Data collected in four subjects part of the Human Connectome 7-Tesla (7T) dataset were used.  Data were collected the University of Minnesota Siemens 7T scanner.
    </p>
    <a href="https://www.humanconnectome.org/data" target="_blank">- http://www.humanconnectome.org/data</a><br>
    </blockquote>

    <br>
</div>

<br><br>

# How is data processed?

<!--
## BIDS Format

Data files are organized according to the specifications defined by the Brain Imaging Data Structure (BIDS). BIDS proposes a new standard for organize and describe neuroimaging data that can be both human and machine readable. Currently the specifications of the format don’t cover entirely the definition for data derivatives. We refer to the latest draft of the standard that introduces the format for data derivatives. 

The documentation of BIDS is available at <a href="http://bids.neuroimaging.io">http://bids.neuroimaging.io</a>
-->

<!--## Voxel reconstruction model and tractography-->

White matter fascicles tracking was performed using MRtrix 0.2.12.  White- and gray-matter tissues were segmented using the T1-weighted MRI images associated to each individual brain, and then resampled at the resolution of the dMRI data. Only voxels identified primarily as white-matter tissue were used to perform tracking. 

## Tract evaluation

We used the [LiFE (Linear Fascicle Evaluation)](https://francopestilli.github.io/life/) method to optimize each fascicle group generated with tractography. The LiFE method identifies fascicles that successfully contribute to predicting the measured dMRI signal. It has been shown that only a small percentage of the total number of fascicles generated through a single tractography method is supported by the properties of given data set. Because of this we removed all fascicles making no significant contribution to explaining the diffusion measurements. The number of streamlines retained in these optimized fascicles groups ranged about 80,000 (STN96) to 160,000 (HCP90).  Only fascicles groups processed using LiFE were used for all subsequent analyses.

## Tract segmentation

Whole brain fascicles groups comprising only the tracts successfully contributing to predicting the measured dMRI signal as evaluated using LiFE were segmented to generated following major human white matter fascicle.

- Anterior thalamic radiation (ATRl) (ATRr)
- Corticospinal tracts (CSTl) (CSTr)
- Cingulum - cingulate gyrus (CCgl) (CCgr)
- Cingulum - hippocampus (CHyl) (CHyr)
- Forceps major (FMJ)
- Forceps minor (FMI)
- Inferior fronto-occipital fasciculus (IFOFl) (IFOFr)
- Inferior longitudinal fasciculus (ILFl) (ILFr)
- Superior longitudinal fasciculus (SLFl) (SLFr)
- Uncinate fasciculus (UFl) (UFr)
- Superior longitudinal fasciculus - temporal part (SLFTl) (SLFTr)

<!--
## Tractogram registration
- (Wang et al. 2011)
- (O’Donnell et al. 2012)
- (Garyfallidis et al. 2015)

## Tractogram clustering
- (Maddah et al. 2008)
- (Garyfallidis et al. 2012)
- (O'Donnell et al. 2013)
-->

<br>
<br>

<center>
    <img src="images/open-book.svg" style="width: 100px;">
</center>



