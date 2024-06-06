
# Automated Grading and Feedback : SmartExamPro (Team : Ai Artists)
![image](https://github.com/Senthil-Riddhish/HumanAlzeHack2skill-Ai-Artists/assets/82893678/f1339060-e31a-4fae-90fc-e3c391bb1745)

Our project aims to revolutionize education through an AI-driven automated grading, evaluation, and feedback system. Powered by advanced NLP techniques, it assesses written responses with precision, the system provides a comprehensive evaluation by automatically detecting and correcting grammar, punctuation, and spelling errors. It also performs real-time plagiarism checks, ensuring academic integrity. Beyond grading, it delivers personalized feedback and detailed performance analysis for each student, accommodating diverse learning styles. Teachers can create tests, students submit responses for automated evaluation and grading.

We’re aiming to develop an AI-driven automated grading, evaluation, feedback, and recommendation system tailored for educational institutions.

## **Table of Contents**
 - Purpose
 - A Brief of the Prototype
 - Architecture Diagram
 - Flow Diagram
 - Dataset and Annotations
 - Step-by-Step Code Execution Instructions
      - Installation
 - Tech Stack


## Purpose 💰
- AI serves as the backbone of our application, driving automation and personalization across various key functions. Utilizing Natural Language Processing (NLP), it ensures precise evaluation of written responses and detects errors effectively. Through machine learning, automated grading is executed based on predefined criteria, maintaining consistency and fairness.
- Moreover, AI conducts in-depth performance analysis by analyzing student data, generating detailed reports, and offering personalized recommendations for improvement. This includes tailored feedback, catering to individual student performance levels. Additionally, our system incorporates a recommendation engine, suggesting relevant articles and links based on student performance, fostering continuous learning and growth.

## A Brief of the Prototype
Our prototype leverages cutting-edge AI technologies to revolutionize the educational grading process. By integrating advanced Natural Language Processing (NLP) and Machine Learning (ML) algorithms, the system ensures precise evaluation and comprehensive feedback for written student responses.
Key Features:
  - NLP-Powered Assessment: Utilizes state-of-the-art NLP models for accurate error detection,grammar correction, and sentence structure analysis.
  - Automated Grading: Employs ML algorithms to grade responses consistently based on predefined rubrics, ensuring unbiased and efficient evaluation.
  - Real-Time Plagiarism Detection: Implements sophisticated AI techniques to compare student submissions against extensive databases, safeguarding academic integrity.
  - Performance Analytics: Analyzes student performance data to generate detailed insights, highlighting strengths and areas for improvement.
  - Personalized Feedback: Provides tailored recommendations and feedback, including text-based suggestions, visual aids, and audio recordings, to support diverse learning styles.
  -  Recommendation Engine: Uses AI to suggest relevant articles and learning resources based on individual student performance and needs.

## Flow Diagram
![image](https://github.com/Senthil-Riddhish/HumanAlzeHack2skill-Ai-Artists/assets/82893678/9325ee04-8e0a-42b1-97da-0bc458d388b3)

## Architecture Diagram
![image](https://github.com/Senthil-Riddhish/HumanAlzeHack2skill-Ai-Artists/assets/82893678/f4a1a116-abb3-44bf-bd6d-bc3436508faf)
![image](https://github.com/Senthil-Riddhish/HumanAlzeHack2skill-Ai-Artists/assets/82893678/7a97a8f0-e88a-4e43-9300-e45fe7f34555)


## Datasets
Datasets taken from [YouData.ai](https://www.youdata.ai/) :
- Grammar Correction : https://www.youdata.ai/datasets/661d1477f4f4dd2b4e1cacae,
- Text generation and language processing: https://www.youdata.ai/datasets/65f6856c111e3e17ed622395
-  Natural Language Processing (Nlp) Reasoning: https://www.youdata.ai/datasets/661d16cf9982e31fead0149d

## Step-by-Step Code Execution Instructions
1. Clone the Repo by using the below command: 
```
git clone https://github.com/Senthil-Riddhish/HumanAlzeHack2skill-Ai-Artists.git
```
2. After cloning,You will find three folder Client, Model and Server
Open two different Terminals and open Client and Server inside it and run the below two commands:
- Install packages:
```
npm install
```
- Start
```
npm  start
```
3. For running the model,Open the Model  Folder in separate terminal
Run the below command,before that install necessary packages and Libraries
```
python app.py
```


## Technology stack involved
- Frontend: [![My Skills](https://skillicons.dev/icons?i=react,tailwind)](https://skillicons.dev)
- Backend: [![My Skills](https://skillicons.dev/icons?i=nodejs,express,js)](https://skillicons.dev)
- Database: [![My Skills](https://skillicons.dev/icons?i=mongodb)](https://skillicons.dev)
- Language Model Training : [![My Skills](https://skillicons.dev/icons?i=py,flask)](https://skillicons.dev)
- Platform Used : [![My Skills](https://skillicons.dev/icons?i=vscode)](https://skillicons.dev)

## Model preprocessing and training
- **TensorFlow**: A powerful open-source machine learning library developed by Google, widely used for building and training deep learning models.
- **Pandas**: A data manipulation and analysis library for Python, often used for data preprocessing and manipulation tasks.
- **NumPy**: A fundamental package for scientific computing with Python, providing support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions.
- **Scikit-learn**: A machine learning library for Python, providing simple and efficient tools for data mining and data analysis, including preprocessing techniques, model selection, and evaluation.
- **Tokenizer**: A utility class provided by TensorFlow for tokenizing text data, splitting it into individual tokens or words.
- **pad_sequences**: A function from TensorFlow.keras.preprocessing.sequence module used to pad sequences to a fixed length.
- **Sequential**: A model in TensorFlow’s Keras API that allows for linear stacking of layers.
- **Input**: A layer in TensorFlow’s Keras API used to instantiate a Keras tensor.
- **Embedding**: A layer in TensorFlow’s Keras API used for representing words or tokens in a dense vector space.
- **LSTM** (Long Short-Term Memory): A type of recurrent neural network (RNN) architecture well-suited for sequence prediction tasks due to its ability to maintain long-term dependencies.
- **Dense**: A fully connected layer in TensorFlow’s Keras API, used for implementing feedforward neural networks.
- **Bidirectional**: A wrapper in TensorFlow’s Keras API used to create bidirectional RNNs, which process the input sequence both forwards and backwards.

## Features
1. **NLP-Powered Assessment**:
     - Utilizes advanced Natural Language Processing (NLP) models to accurately detect and correct grammar, punctuation, and spelling errors.
Analyzes sentence structure and provides vocabulary enhancement suggestions.
2. **Automated Grading**:
     - Employs Machine Learning (ML) algorithms to grade written responses based on predefined criteria, ensuring consistent and unbiased evaluation.
3. **Real-Time Plagiarism Detection**:
     - Compares student submissions against a vast database of texts to detect similarities and ensure originality. Provides a plagiarism score for each submission.
4. **Personalized Feedback**:
     - Generates detailed, individualized feedback that includes text-based suggestions, visual aids, and audio recordings to cater to diverse learning styles. Offers vocabulary enrichment suggestions to improve writing quality.
5. **Performance Analysis**:
     - Analyzes student performance data to identify strengths and areas for improvement. Predicts the performance of a student based on their marks. Provides insights on which students are slow, average, or good performers.Assists in creating personalized learning plans for students.
     - Provides detailed performance reports and personalized recommendations for further learning.
6. **Recommendation Engine**:
     - Suggests relevant articles, learning resources, and study materials based on individual student performance and needs.
7. **Teacher and Student Interaction**:
     - Allows teachers to create and allocate tests, and students to submit their responses for automated evaluation. Provides an option for teachers to manually enter marks, which the system uses to calculate overall student performance.
8. **Multimodal Feedback Generation**:
     - Delivers feedback in various forms, including text, visualizations etc to enhance student engagement and understanding.
9. **User-Friendly Interface**:
     - Intuitive platform design that is easy to navigate for both teachers and students.
     - Supports seamless integration with existing educational tools and systems.
10. **Scalability and Flexibility**:
     - Designed to handle a large number of submissions and evaluations efficiently. Adaptable to different educational levels and subjects, making it suitable for diverse educational settings.

Our AI-driven system transforms education by automating tasks, ensuring consistency and fairness, and providing comprehensive feedback and analysis. This project modernizes education, fostering an efficient and engaging learning environment.


