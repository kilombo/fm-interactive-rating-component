import { useCallback, useState } from 'react';

interface RatingNumbersProps {
  numbers: number[];
  onNumberSelect: (number: number) => void;
}

export default function RatingNumbers({
  numbers,
  onNumberSelect,
}: RatingNumbersProps) {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const handleNumberClick = useCallback(
    (number: number) => () => {
      setSelectedNumber(number);
      onNumberSelect(number);
    },
    [onNumberSelect]
  );

  return (
    <section className="flex justify-between">
      {numbers.map((number) => (
        <button
          className={`h-10 w-10 p-3 bg-darkBlue-500 rounded-full text-gray-400 text-sm flex justify-center items-center hover:bg-orange-500 hover:text-white transition active:bg-gray-500 active:text-white ${
            selectedNumber === number ? 'bg-gray-500 text-white' : ''
          }`}
          key={number}
          onClick={handleNumberClick(number)}
        >
          {number}
        </button>
      ))}
    </section>
  );
}
