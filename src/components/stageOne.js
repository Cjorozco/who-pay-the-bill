import { Formik } from 'formik';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, ListItem, Text } from 'react-native-elements';
import * as Yup from 'yup';
import { MyContext } from '../context';
import { MainLogo } from '../utils/tools';

const StageOne = () => {
  const context = useContext(MyContext);

  const renderPlayers = context.state.players.map((item, idx) => {
    return(
      <ListItem 
        key={idx}
        bottomDivider
        style={{ width:'100%' }}
        onLongPress={() => context.removePlayer(idx)}
      >
        <ListItem.Chevron />
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  });

  return (
    <>
      <Formik
        initialValues={{player: ''}}
        validationSchema={Yup.object({
          player: Yup.string()
            .min(3, 'Must be more than 3 char')
            .max(15, 'Must be less than 15 char')
            .required('Sorry, the name is required')
        })}
        onSubmit={(values, {resetForm}) => {
          context.addPlayer(values.player);
          resetForm();
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
          <>
            <MainLogo />
            <Input
              placeholder='Add names here'
              leftIcon={{type: 'antdesign', name: 'adduser'}}
              inputContainerStyle={{
                marginHorizontal: 50,
                marginTop: 50
              }}
              renderErrorMessage={errors.player && touched.player}
              errorMessage={errors.player}
              errorStyle={{
                marginHorizontal: 50
              }}
              onChangeText={handleChange('player')}
              onBlur={handleBlur('player')}
              values={values.player}
            />
            <Button
              title='Add Player' 
              onPress={handleSubmit}
              buttonStyle={styles.button}
            />
          </>
        )}
      </Formik>
      <View style={{padding: 20, width:'100%'}}>        
        {context.state.players && context.state.players.length > 0 ?
          <>
            <Text>List of players</Text>
            {renderPlayers}
            <Button
              title='Get the looser' 
              onPress={() => context.next()}
              buttonStyle={styles.button}
            />
          </> : null
        }    
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    marginTop: 20
  },
});

export default StageOne;