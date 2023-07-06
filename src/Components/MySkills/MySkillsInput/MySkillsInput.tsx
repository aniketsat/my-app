import React, { useContext, useEffect, useState } from "react";
import { Text, Input } from "@nextui-org/react";
import { SkillsContext } from "@/context/skillsContext";

type SkillType = {
  id: number;
  name: string;
};

const MySkillsInput = () => {
  const { state, dispatch } = useContext<any>(SkillsContext);
  const { allSkills, mySkills } = state;

  // store the remaining skills in a state allSkills - mySkills
  const [remainingSkills, setRemainingSkills] = useState<SkillType[]>(
    allSkills.filter(
      (skill: SkillType) => !mySkills.find((s: SkillType) => s.id === skill.id)
    )
  );

  useEffect(() => {
    setRemainingSkills(
      allSkills.filter(
        (skill: SkillType) => !mySkills.find((s: SkillType) => s.id === skill.id)
      )
    );
  }, [allSkills, mySkills]);


  const [skillName, setSkillName] = useState<string>("");

  const addHandler = (skillName: string) => {
    console.log(skillName);
    // check if skill exists
    const skillExists = allSkills.find(
      (skill: SkillType) => skill.name === skillName
    );
    if (skillExists) {
      // check if skill is already added
      const skillAlreadyAdded = mySkills.find(
        (skill: SkillType) => skill.name === skillName
      );
      if (skillAlreadyAdded) {
        console.log("Skill already added");
      } else {
        dispatch({
          type: "ADD_SKILL",
          payload: skillExists,
        });
      }
      setRemainingSkills(
        remainingSkills.filter((skill: SkillType) => skill.name !== skillName)
      );
    } else {
      console.log("Skill does not exist");
    }
    setSkillName("");
  };

  return (
    <>
      <Text h5>Search for a skill</Text>
      <Input
        placeholder="Search"
        size="lg"
        width="100%"
        list="skills"
        value={skillName}
        onChange={(e) => setSkillName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addHandler(skillName);
          }
        }}
      />
      <datalist
        id="skills"
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          position: "absolute",
          zIndex: 1,
          top: "100%",
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          padding: "10px",
          maxHeight: "200px",
        }}
      >
        {remainingSkills.map((skill: SkillType) => (
          <option
            key={skill.id}
            aria-label={skill.name}
            style={{
              cursor: "pointer",
              padding: "5px",
             
            }}
            value={skill.name}
          />
        ))}
      </datalist>
    </>
  );
};

export default MySkillsInput;
