import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import useFetch from "use-http";
import { MdBusinessCenter } from 'react-icons/md';
import { BsFillPhoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { INumber } from "../Number";
import './Company.css';

export interface ICompany {
  id: number,
  name: string,
  vatin: string
}

export const Company = () => {
  const { id } = useParams();

  const [company, setCompany] = useState<ICompany>();
  const [numbers, setNumbers] = useState<INumber[]>([]);

  const { get, response } = useFetch();

  const loadCompany = useCallback(async () => {
    await get(`/companies/${id}`);

    if (response.ok) {
      setCompany(response.data);
    }
  }, [get, response]);

  const loadNumbers = useCallback(async () => {
    await get(`/phone_numbers?company_id=${id}`);

    if (response.ok) {
      setNumbers(response.data);
    }
  }, []);

  useEffect(() => {
    loadCompany();
    loadNumbers();
  }, [loadCompany, loadNumbers]);

  return (
    <main>
      <h1 className="company-name">
        <MdBusinessCenter /> {company?.name}
      </h1>

      <div className="content">
        <section className="row-info columns-header">
          <p>Number</p>
          <p>Type</p>
        </section>

        <ul className="data">
          {numbers.map(number => (
            <Link to={`/number/${number.id}`} key={number.id} className="row-info item">
              <p>{number.id}</p>
              <p>
                {number.type === 'mobile' ? <BsFillPhoneFill /> : <GiRotaryPhone />}
                <span>{number.type}</span>
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  )
}
