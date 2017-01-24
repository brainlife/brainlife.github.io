---
title: "LiFE"
subtitle: "Linear Fascicle Evaluation"
layout: app
starturl: "https://brain-life.org/life"
permalink: /life
---

Standard tractography can use diffusion measurements from a living brain to generate a large collection of candidate white-matter fascicles; the connectome. Linear Fascicle Evaluation (`LiFE`) takes any connectome and uses a forward modelling approach to predict diffusion measurements in the same brain. 

`LiFE` predicts the measured diffusion signal using the orientation of the fascicles present in a connectome. LiFE uses the difference between the measured and predicted diffusion signals to measure prediction error. The connectome model prediction error is used to compute two metrics to evaluate the evidence supporting properties of the connectome. 

We generate following metrics:

* *The strength of evidence* compares the mean prediction error between alternative hypotheses. 
* *The earth movers distance* compares full distributions of prediction error. 

These metrics can be used for: 

1. Comparing tractography algorithms 
2. Evaluating the quality of tractography solutions for individual brains or group of brains and 
3. Testing hypotheses about white-matter tracts and connections.



