import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response =>console.log(response.data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Task made money</td>
            <td className="deposit">$1,000.00</td>
            <td>Category</td>
            <td>30/03/2021</td>
          </tr>
          <tr>  
            <td>Task lost money</td>
            <td className="withdraw">-$1,000.00</td>
            <td>Category</td>
            <td>30/03/2021</td>
          </tr>          
        </tbody>

      </table>
    </Container>
  )
}