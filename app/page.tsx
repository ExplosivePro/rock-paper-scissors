"use client"

import Game from './components/Game/Game'
import Record from './components/Record/Record'
import RulesModal from './components/RulesModal/RulesModal'
import { useModalContext } from './contexts/ModalContext'

export default function Home() {
  const { toggleModal } = useModalContext()
  const showRuleModal = () => {
    toggleModal('rules');
  }
  return (
    <>
      <Record />
      <Game />
      <button className='rule-button' onClick={showRuleModal}>rules</button>
      <RulesModal />
    </>
  )
}
