import React, { createContext, useContext, useReducer } from "react"

type SkillType = {
  id: number;
  name: string;
}
type StateType = {
  allSkills: SkillType[];
  mySkills: SkillType[];
}
interface ContextType {
  state: StateType;
  dispatch: React.Dispatch<{ type: string; value: unknown }>;
}

const allSkills: SkillType[] = [
  {id:1, name:"React"},
  {id:2, name:"Next.js"},
  {id:3, name:"Node.js"},
  {id:4, name:"Express.js"},
  {id:5, name:"MongoDB"},
  {id:6, name:"PostgreSQL"},
  {id:7, name:"TypeScript"},
  {id:8, name:"JavaScript"},
  {id:9, name:"HTML"},
  {id:10, name:"CSS"},
  {id:11, name:"SASS"},
  {id:12, name:"Tailwind CSS"},
  {id:13, name:"Bootstrap"},
  {id:14, name:"Material UI"},
  {id:15, name:"Chakra UI"},
  {id:16, name:"Ant Design"},
  {id:17, name:"GraphQL"},
  {id:18, name:"Apollo"},
  {id:19, name:"REST API"},
  {id:20, name:"Git"},
  {id:21, name:"GitHub"},
  {id:22, name:"GitLab"},
  {id:23, name:"BitBucket"},
  {id:24, name:"Jira"},
  {id:25, name:"Confluence"},
  {id:26, name:"Trello"},
  {id:27, name:"Figma"},
  {id:28, name:"Adobe XD"},
  {id:29, name:"Adobe Photoshop"},
  {id:30, name:"Adobe Illustrator"},
  {id:31, name:"Adobe After Effects"},
  {id:32, name:"Adobe Premiere Pro"},
  {id:33, name:"Adobe Lightroom"},
  {id:34, name:"Adobe InDesign"},
  {id:35, name:"Adobe Audition"},
]


const initialState = {
  allSkills: allSkills,
  mySkills: []
}

const SkillsContext = createContext<ContextType | null>(null);

const skillsReducer = (state: StateType, action: any) => {
  switch (action.type) {
    case "ADD_SKILL":
      const isSkillExist = state.mySkills.find((skill: SkillType) => skill.id === action.payload.id)
      if (isSkillExist) return state
      return {
        ...state,
        mySkills: [...state.mySkills, action.payload]
      }
    case "REMOVE_SKILL":
      return {
        ...state,
        mySkills: state.mySkills.filter((skill: SkillType) => skill.id !== action.payload.id)
      }
    default:
      return state
  }
}



const SkillsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(skillsReducer, initialState)


  return (
    <SkillsContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </SkillsContext.Provider>
  )
}

export { SkillsContext, SkillsProvider };


