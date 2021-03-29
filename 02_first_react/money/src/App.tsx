import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(true)

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}
  
  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </div>
  );
}

