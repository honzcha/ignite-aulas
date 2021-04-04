import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { TransactionTypeContainer, RadioBox, Container } from './styles';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import closeImg from '../../assets/close.svg'
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
 
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps) {
  const {createTransaction} = useTransactions();

  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState(0);
  const [category,setCategory] = useState('');
  const [type, setType] = useState('income')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('income');

    onRequestClose()
  }

  return(   
  <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
      >
      <img src={closeImg} alt="close"/>
    </button>

    <Container onSubmit={handleCreateNewTransaction}>
      <h2>New Transaction</h2>

      <input 
        placeholder="Title"
        value={title}
        onChange={event =>setTitle(event.target.value)}
      />

      <input 
      type='number' 
      placeholder="Amount"
      value={amount}
      onChange={event =>setAmount(Number(event.target.value))}
      />

      <TransactionTypeContainer>
        <RadioBox 
          type="button"
          onClick={()=>{setType('income')}}
          isActive={type === 'income'}
          activeColor='green'
        >
          <img src={incomeImg} alt="income"/>
          <span>Income</span>
        </RadioBox>
        <RadioBox 
          type="button"
          onClick={()=>{setType('outcome')}}
          isActive={type === 'outcome'}
          activeColor='red'
        >
          <img src={outcomeImg} alt="outcome"/>
          <span>Expense</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input 
      placeholder="Category"
      value={category}
      onChange={event =>setCategory(event.target.value)}
      />
      
      <button type="submit">Submit</button>
      
    </Container>
   </Modal>
  )
}