import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "use-http"
import { ICompany } from "../Company";
import './Home.css';

export const Home = () => {
  const { get, response } = useFetch<ICompany[]>('/companies');

  const [companies, setCompanies] = useState<ICompany[]>([]);

  const loadCompanies = useCallback(async () => {
    await get();

    if (response.ok && response.data) {
      setCompanies(response.data);
    }
  }, [get, response]);

  useEffect(() => {
    loadCompanies();
  }, [loadCompanies]);

  return (
    <main className="home">
      <section className="row-info columns-header">
        <p>Company</p>
        <p>Vatin</p>
      </section>

      <ul className="data">
        {companies.map(company => (
          <Link to={`/company/${company.id}`} key={company.id} className="row-info item">
            <p>{company.name}</p>
            <p>{company.vatin}</p>
          </Link>
        ))}
      </ul>
    </main>
  )
}
