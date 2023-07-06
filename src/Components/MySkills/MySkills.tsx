import React from 'react'
import { Grid, Text, Input } from "@nextui-org/react";
import SkillBadge from '@/Components/SkillBadge';
import MySkillsInput from './MySkillsInput/MySkillsInput';
import MySkillsList from './MySkillsList/MySkillsList';

const MySkills = () => {
  return (
    <Grid
          xs={12}
          sm={6}
          md={6}
          lg={6}
          justify="center"
          css={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <MySkillsInput />
          <MySkillsList />
        </Grid>
  )
}

export default MySkills