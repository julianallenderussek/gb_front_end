import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";

const Student = ({ name, number, enrolled }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Student {name} with student number {number}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {enrolled.map((course) => {
            return (
              <>
                <b>Course {course}</b>
                <br />
              </>
            );
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Student;
