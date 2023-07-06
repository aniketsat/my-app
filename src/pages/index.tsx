import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Button,
  Container,
  Grid,
  Card,
  Text,
  Input,
  Badge,
} from "@nextui-org/react";
import SkillsList from "@/Components/SkillsList/SkillsList";
import MySkills from "@/Components/MySkills/MySkills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Grid.Container
        gap={2}
        justify="center"
        css={{
          height: "100vh",
        }}
      >

        <SkillsList />

        <MySkills />

      </Grid.Container>
    </>
  );
}
