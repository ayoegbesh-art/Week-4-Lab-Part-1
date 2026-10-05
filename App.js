
import {SafeAreaView, Text, View, TextInput, Button, Alert} from 'react-native';

import { useState } from 'react';

export default function App() {

  const gradePoints = {
    'F': 0,
    'D': 1.5,
    'C': 2,
    'C+': 2.75,
    'B': 3,
    'B+': 3.5,
    'A': 4
  };

  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');

  var gpa = 0;
  var credits = 5;
  var totalPossibleCredits = 10;
  var totalGradeScores = 0;

  function clickMe() {

    Alert.alert("this is the click me button");

    var sswdGradeScore = gradePoints[sswd] * credits;
    totalGradeScores = totalGradeScores + sswdGradeScore;

    var obGradeScore = gradePoints[ob] * credits;
    totalGradeScores = totalGradeScores + obGradeScore;

    gpa = totalGradeScores / totalPossibleCredits;

    alert("Your GPA is " + gpa);
  }

  return (

    <SafeAreaView>

      <View>
        <Text>
          SSWD
        </Text>

        <TextInput
          placeholder="Grade"
          onChangeText={setSswd}
        />
      </View>

      <View>
        <Text>
          Organisational Behaviour
        </Text>

        <TextInput
          placeholder="Grade"
          onChangeText={setOb}
        />
      </View>

      <View>
        <Button
          title="submit"
          onPress={clickMe}
        />
      </View>

    </SafeAreaView>
  );
}




    
