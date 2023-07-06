import React, {Dispatch, useContext} from 'react'
import { Grid, Text } from "@nextui-org/react";
import SkillBadge from '@/Components/SkillBadge';
import { SkillsContext } from '@/context/skillsContext';

type SkillType = {
  id: number;
  name: string;
}

const SkillsList = () => {
  const { state, dispatch } = useContext<any>(SkillsContext)

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
          <Text h2>
            Select from the below list of skills
          </Text>
          <Grid.Container
            gap={2}
            css={{
              height: "100%",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
            }}
          >
            {state.allSkills.map((skill: SkillType) => (
              <SkillBadge skill={skill} key={skill.id} category={"all"} />
            ))}
          </Grid.Container>
        </Grid>
  )
}

export default SkillsList