# 🔋 EV Social Media Sentiment & Engagement Analysis

*Predicting public sentiment and engagement patterns around Electric Vehicles through Facebook post analysis using NLP and topic modeling.*

---

## 📋 Table of Contents
- [Overview]
- [Motivation]
- [Objectives]
- [Methodology]
- [Dataset]
- [Key Features]

---

## 🎯 Overview

This project analyzes **300,000+ Facebook posts** related to Electric Vehicles (EVs) to understand public sentiment and identify key adoption drivers as well as inhibitors using advanced NLP techniques.
---

## 💡 Motivation

### Problem
Electric Vehicles represent a rapidly growing sector, but predicting industry trends and public perception remains challenging due to the volatile nature of social media discourse.

### Solution
We developed a comprehensive NLP pipeline that performs:
- **Token-wise and document-wise sentiment analysis**
- **Unsupervised and supervised modeling**
- **Exploratory visualization** of sentiment patterns and trending topics

---

## 🎯 Objectives

- Perform exploratory data analysis on EV-related posts, user locations, and keywords
- Develop topic models to identify key discussion themes in EV conversations
- Visualize different topics extracted from social media posts
- Implement sentiment analysis to classify posts as positive, negative, or neutral
- Predict engagement metrics for EV-related content

---

## 🔬 Methodology

### Topic Modeling
- **Latent Dirichlet Allocation (LDA)** for inferring discussion topics
- Superior accuracy and interpretability compared to alternative methods

### Sentiment Analysis
- **VADER**: Rule-based model for general sentiment classification
- **SONAR**: Advanced model for detecting hateful and offensive content
- Analysis of **300,000 Facebook posts** across multiple pages and time periods

### Natural Language Processing
- **NLTK** for text processing and classification
- Feature extraction using unigrams, bigrams, and n-gram models
- Parts-of-speech tagging and syntactic pattern analysis

---

## 📊 Dataset

### Source
- **300,000 Facebook posts**
- Diverse topics within electric vehicle domain
- Extended time period coverage

### Preprocessing Pipeline
1. **Tokenization**: Text segmentation and word separation
2. **Cleaning**: Removal of stop words, URLs, hashtags, tags, punctuation, symbols, and numbers
3. **Normalization**: Spelling correction and acronym expansion
4. **Emoticon Processing**: Replacement with corresponding sentiment labels
5. **POS Tagging**: Part-of-speech identification for feature engineering
6. **Lemmatization**: Word root reduction to handle plurals and conjugations

---

## ⚡ Key Features

### Analysis Components
- **Exploratory Data Analysis** of posts and user engagement patterns
- **Topic Modeling** with LDA for theme identification
- **Sentiment Classification** using VADER and SONAR
- **Visualization** of topics, bigrams, word clouds, and dominant themes
- **Engagement Prediction** for social media content

### Technical Implementation
- Custom NLP preprocessing pipeline
- Comparative sentiment analysis models
- Interactive visualizations for result interpretation

---
