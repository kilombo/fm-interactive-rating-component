'use client';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './button';
import RatingNumbers from './rating-numbers';

export default function FeedbackModal() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [scoreRated, setScoreRated] = useState(0);
  const ratingNumbers = [1, 2, 3, 4, 5];
  const handleSubmit = () => {
    setFeedbackSubmitted(true);
  };
  const numberSelected = (number: number) => {
    setScoreRated(number);
  };

  return (
    <section className="bg-darkBlue-600 rounded-xl px-6 py-8">
      {!!!feedbackSubmitted ? (
        <div>
          <div className="p-3 bg-darkBlue-500 rounded-full w-auto inline-block mb-5">
            <StarIcon className="h-4 w-4 text-orange-500" />
          </div>
          <h2 className="text-lg mb-5">How did we do?</h2>
          <p className="text-sm text-gray-400 mb-5">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="mb-5">
            <RatingNumbers
              numbers={ratingNumbers}
              onNumberSelect={numberSelected}
            />
          </div>
          <Button
            className="mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={scoreRated === 0}
          >
            Submit
          </Button>
        </div>
      ) : (
        <div>
          <div>
            <Image
              src={`illustration-thank-you.svg`}
              alt="Thank you image."
              width={150}
              height={150}
            />
          </div>
          <div>
            You selected {scoreRated} out of{' '}
            {ratingNumbers[ratingNumbers.length - 1]}
          </div>
          <h2 className="text-lg mb-5 text-center">Thank you!</h2>
          <p className="text-sm text-gray-400 mb-5">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don&apos;t hesitate to get in touch!
          </p>
        </div>
      )}
    </section>
  );
}
