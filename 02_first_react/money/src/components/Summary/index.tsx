import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';


import { Container } from "./styles";

export function Summary() {

  const {transactions} = useTransactions()

  const summary = transactions.reduce((acc, transaction) =>{
    if (transaction.type === 'income') {
      acc.income += transaction.amount;
      acc.total += transaction.amount;

    } else {
      acc.expense += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    income: 0,
    expense: 0,
    total: 0,
  })

  return(
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income"/>
        </header>
        <strong>
        {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                  }).format(summary.income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome"/>
        </header>
        <strong>
          -
        {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                  }).format(summary.expense)}
          </strong>
      
      </div>
      <div className="highligh-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
          
        {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                  }).format(summary.total)}
        
        </strong>
      </div>
    </Container>
  );
}