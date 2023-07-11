import React from 'react'
import { Button } from 'react-bootstrap'

interface props {
    buttonText: string;
}

function NavigationButton(props: props) {
  return (
    <Button>{props.buttonText}</Button>
  )
}

export default NavigationButton