import { useCallback, useEffect, useState } from "react"
import { BsFillPhoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import './Number.css';

export interface INumber {
  id: string;
  type: string;
}

export const Number = () => {
  const { id } = useParams();

  const [number, setNumber] = useState<INumber>();

  const { get, response } = useFetch(`/phone_numbers/${id}`);

  const loadNumber = useCallback(async () => {
    await get();

    if (response.ok) {
      setNumber(response.data);
    }
  }, [get, response]);

  useEffect(() => {
    loadNumber();
  }, [loadNumber]);

  return (
    <main className="number-info">
      <span>{number?.id}</span>
      <p>
        {number?.type === 'mobile' ? <BsFillPhoneFill /> : <GiRotaryPhone />}
        <span>{number?.type}</span>
      </p>
    </main>
  )
}
