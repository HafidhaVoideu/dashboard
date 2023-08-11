import React, { useState } from "react";
import { Header } from "../../components/Header";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
} from "@mui/material";

import { tokens } from "../../theme";

import { ExpandMore } from "@mui/icons-material";

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [expanded, SetExpanded] = useState<string | undefined>("");

  const handleAccordion = (isExpanded: boolean, value: string) => {
    SetExpanded(isExpanded ? value : undefined);
  };

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(_, isExpanded) => handleAccordion(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMore />}
          >
            <Typography color={colors.greenAccent[500]}>
              Important Question one
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis minima sint iste necessitatibus atque reiciendis,
              veritatis quidem, voluptate modi cupiditate laboriosam dolor, et
              quaerat totam cumque fuga. Error, eius dignissimos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Perferendis minima
              sint iste necessitatibus atque reiciendis, veritatis quidem,
              voluptate modi cupiditate laboriosam dolor, et quaerat totam
              cumque fuga. Error, eius dignissimos. Perferendis minima sint iste
              necessitatibus atque reiciendis, veritatis quidem, voluptate modi
              cupiditate laboriosam dolor, et quaerat totam cumque fuga. Error,
              eius dignissimos.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={(_, isExpanded) => handleAccordion(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMore />}
          >
            <Typography color={colors.greenAccent[500]}>
              Important Question Two
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis minima sint iste necessitatibus atque reiciendis,
              veritatis quidem, voluptate modi cupiditate laboriosam dolor, et
              quaerat totam cumque fuga. Error, eius dignissimos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Perferendis minima
              sint iste necessitatibus atque reiciendis, veritatis quidem,
              voluptate modi cupiditate laboriosam dolor, et quaerat totam
              cumque fuga. Error, eius dignissimos. Perferendis minima sint iste
              necessitatibus atque reiciendis, veritatis quidem, voluptate modi
              cupiditate laboriosam dolor, et quaerat totam cumque fuga. Error,
              eius dignissimos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={(_, isExpanded) => handleAccordion(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMore />}
          >
            <Typography color={colors.greenAccent[500]}>
              Important Question Three
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis minima sint iste necessitatibus atque reiciendis,
              veritatis quidem, voluptate modi cupiditate laboriosam dolor, et
              quaerat totam cumque fuga. Error, eius dignissimos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Perferendis minima
              sint iste necessitatibus atque reiciendis, veritatis quidem,
              voluptate modi cupiditate laboriosam dolor, et quaerat totam
              cumque fuga. Error, eius dignissimos. Perferendis minima sint iste
              necessitatibus atque reiciendis, veritatis quidem, voluptate modi
              cupiditate laboriosam dolor, et quaerat totam cumque fuga. Error,
              eius dignissimos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={(_, isExpanded) => handleAccordion(isExpanded, "panel4")}
        >
          <AccordionSummary
            id="panel4-header"
            aria-controls="panel4-content"
            expandIcon={<ExpandMore />}
          >
            <Typography color={colors.greenAccent[500]}>
              Important Question Four
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis minima sint iste necessitatibus atque reiciendis,
              veritatis quidem, voluptate modi cupiditate laboriosam dolor, et
              quaerat totam cumque fuga. Error, eius dignissimos. Perferendis
              minima sint iste necessitatibus atque reiciendis, veritatis
              quidem, voluptate modi cupiditate laboriosam dolor, et quaerat
              totam cumque fuga. Error, eius dignissimos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={(_, isExpanded) => handleAccordion(isExpanded, "panel4")}
        >
          <AccordionSummary
            id="panel4-header"
            aria-controls="panel4-content"
            expandIcon={<ExpandMore />}
          >
            <Typography color={colors.greenAccent[500]}>
              Important Question Five
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis minima sint iste necessitatibus atque reiciendis,
              veritatis quidem, voluptate modi cupiditate laboriosam dolor, et
              quaerat totam cumque fuga. Error, eius dignissimos. Perferendis
              minima sint iste necessitatibus atque reiciendis, veritatis
              quidem, voluptate modi cupiditate laboriosam dolor, et quaerat
              totam cumque fuga. Error, eius dignissimos.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
