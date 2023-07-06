import React, { useContext } from "react";
import { Grid, Text, Input } from "@nextui-org/react";
import SkillBadge from "@/Components/SkillBadge";
import { SkillsContext } from "@/context/skillsContext";

type SkillType = {
  id: number;
  name: string;
}

const MySkillsList = () => {
  const { state, dispatch } = useContext<any>(SkillsContext);

  return (
    <Grid.Container
      gap={2}
      css={{
        marginTop: "1rem",
        height: "100%",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
      }}
    >
      {state.mySkills.map((skill: SkillType) => (
        <SkillBadge skill={skill} key={skill.id} category={"my"} />
      ))}
    </Grid.Container>
  );
};

export default MySkillsList;
