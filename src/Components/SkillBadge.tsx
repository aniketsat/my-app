import React, {useContext} from "react";
import { Badge } from "@nextui-org/react";
import { SkillsContext } from "@/context/skillsContext";

type PropType = {
  skill: {
    id: number;
    name: string;
  }
  key: number;
  category: string;
};


const SkillBadge = ({ skill, key, category }: PropType) => {
  const { dispatch } = useContext<any>(SkillsContext);

  const addHandler = () => {
    console.log("add");
    dispatch({
      type: "ADD_SKILL",
      payload: skill
    })
  }
  const removeHandler = () => {
    console.log("remove");
    dispatch({
      type: "REMOVE_SKILL",
      payload: skill
    })
  }

  return (
    <Badge
      isSquared
      key={key}
      onClick={
        category === "all" ? addHandler : removeHandler
      }
      css={{
        margin: "0.5rem",
        padding: "0 1rem",
        maxHeight: "3rem",
      }}
    >
      {skill.name}
    </Badge>
  );
};

export default SkillBadge;
