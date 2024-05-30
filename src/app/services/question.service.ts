import { Injectable } from '@angular/core';
import { QuestionModule } from '../model/question/question.module';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { 
  }

  private questions: QuestionModule[] = [
    // Add 10 questions with 4 options each here
    {
      id: 1,
      question: 'Who was the first President of India?',
      options: ['Pandit Jawahar Lal Nehru', 'Dr. Rajendra Prasad', 'B.R. Ambedkar', 'Zakir Husain'],
      correctans: 'Dr. Rajendra Prasad',
      clientans: '',
    },
    {
      id: 1,
      question: 'Who was the first Prime Minister of India?',
      options: ['Indira Gandhi', 'Subhash Chandra Bose', 'Lal Bahadur Shastri', 'Pandit Jawahar Lal Nehru'],
      correctans: 'Pandit Jawahar Lal Nehru',
      clientans: '',
    },
    {
      id: 1,
      question: 'Who was the first Indian to travel to space?',
      options: ['Sunita Williams', 'Ravish Malhotra', 'Kalpana Chawla', 'Rakesh Sharma'],
      correctans: 'Rakesh Sharma',
      clientans: '',
    },
    {
      id: 1,
      question: 'Who was the first Indian pilot?',
      options: ['R.K. Shanmukham Chetty', 'Sardar Vallabh Bhai Patel', 'J.R.D. Tata', 'Sardar Baldev Singh'],
      correctans: 'J.R.D. Tata',
      clientans: '',
    },
    {
      id: 1,
      question: 'Who was the first Home Minister of India?',
      options: ['Dr. S. Radhakrishnan', 'Sardar Baldev Singh', 'Lal Bahadur Shastri', 'Sardar Vallabh Bhai Patel'],
      correctans: 'Sardar Vallabh Bhai Patel',
      clientans: '',
    },
    {
      id: 1,
      question: 'Who was the first Indian to win a Nobel Prize?',
      options: ['Subhash Chandra Bose', 'Rabindranath Tagore', 'J.R.D. Tata', 'Indira Gandhi'],
      correctans: 'Rabindranath Tagore',
      clientans: '',
    },
    {
      id: 1,
      question: 'Who was the first Indian woman to win Miss World contest?',
      options: ['Aishwariya Rai', 'Reita Faria', 'Diana Hayden', 'Priyanka Chopra'],
      correctans: 'Reita Faria',
      clientans: '',
    },
    {
      id: 1,
      question: 'Who was the first Chief Justice of India of the apex court, Supreme Court?',
      options: ['Justice Y.V. Chandrachud', 'Justice K. Subba Rao', 'Justice Sudhi Ranjan Das', 'Justice Harilal Jekisundas Kania'],
      correctans: 'Justice Harilal Jekisundas Kania',
      clientans: '',
    },
    {
      id: 1,
      question: ' Who was the first woman to receive the Bharat Ratna?',
      options: ['Pratibha Patil', 'Lata Mangeshkar', 'Mother Teresa', 'Indira Gandhi'],
      correctans: 'Indira Gandhi',
      clientans: '',
    },
    {
      id: 1,
      question: 'Name the Indian who won the Miss Universe crown for the first time?.',
      options: ['Reita Faria', 'Manushi Chillar', 'Sushmita Sen', 'Lara Dutta'],
      correctans: 'Sushmita Sen',
      clientans: '',
    },
    // Add more questions...
  ];

  // get questions  

  getQuestions(): QuestionModule[] {
    return this.questions;
  }

  // marks calculation 
  checkAnswers(): { score: number; total: number } {
    let score = 0;
    this.questions.forEach((question) => {
      if (question.clientans === question.correctans) {
        score += 10; // 10 marks for each correct answer
      }
    });
    return { score, total: this.questions.length * 10 };
  }

}
