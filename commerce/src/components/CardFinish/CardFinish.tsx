import Card from '../Card/Card';


type CardFinishProps = {
  attempts: number;
  isOpenCard: boolean;
  onClose: () => void;
  onResetGame: () => void;
};

const CardFinish = (props: CardFinishProps) => {
  const { attempts, isOpenCard, onClose,  onResetGame} = props;
  return (
    <div>
      <Card
        title="Поздравляем!"
        body={
          <>
            Вы успешно завершили игру! <br />
            Количество попыток: {attempts}
          </>
        }
        isOpen={isOpenCard}
        onClose={onClose}
        resetGameProgress={onResetGame}
        type="gameOver"
      />
    </div>
  );
};
export default CardFinish;
