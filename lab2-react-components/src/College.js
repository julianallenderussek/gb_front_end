import { Card, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react'

class College extends Component {
  render() {
    return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
            College {this.props.name} with address {this.props.location}
        </Typography>
      </CardContent>
    </Card>
    )
  }
}

export default College;