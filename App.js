import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  function configureNewGameHandler () {
    setRounds(0);
    setUserNumber(null);
  };

  function startGameHandler (selectedNumber) {
    setUserNumber(selectedNumber);
  };

  function gameOverHandler (numOfRounds) {
    setRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (rounds > 0) {
    content = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onNewGame={configureNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
