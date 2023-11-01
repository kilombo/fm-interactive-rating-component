import { StarIcon } from '@heroicons/react/24/solid';
import RatingNumbers from './rating-numbers';

export default function FeedbackModal() {
  return (
    <section className="bg-darkBlue-600 rounded-xl p-6">
      <div className="p-3 bg-darkBlue-500 rounded-full w-auto inline-block">
        <StarIcon className="h-4 w-4 text-orange-500" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingNumbers />
    </section>
  );
}
