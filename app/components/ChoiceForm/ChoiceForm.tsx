
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { choices } from '@/app/utils/constants';
import styles from './style.module.css';
import GameChoice from '../GameChoice/GameChoice';
import { useGameContext } from '@/app/contexts/GameContext';
const ChoiceSchema = z.object({
  choice: z.enum(['rock', 'paper', 'scissors']),
});

const ChoiceForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch
  } = useForm({
    resolver: zodResolver(ChoiceSchema),
  });
  const {setPlayerChoice} = useGameContext();

  return (
    <form onSubmit={handleSubmit(data => setPlayerChoice(data.choice) )} className={styles["choice-form"]}>
      <div className={styles["choice-form-options"]}>
        {choices.map(choice => (
            <label className="block" key={choice}>
                <input type="radio" value={choice as string} {...register('choice')} className={styles['choice-option']}/>
                <GameChoice choice={choice} className={`${watch('choice') == choice ? 'active': ''}`}/>
            </label>

        ))}
      </div>
      <button type="submit">
        Play
      </button>
    </form>
  );
};

export default ChoiceForm;