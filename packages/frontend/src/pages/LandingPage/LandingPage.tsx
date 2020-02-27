import React from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import InsertLinkCard from '../../components/InsertLinkCard';
import ReportCaseCard from '../../components/ReportCaseCard';
import ResultsCard from '../../components/ResultsCard';
import VoteCard from '../../components/VoteCard';

function LandingPage(props: any) {
  return (
    <Background>
      <Grid container>
        <Grid item xs={4}>
          <InsertLinkCard />
        </Grid>
        <Grid item xs={4}>
          <ReportCaseCard />
        </Grid>
        <Grid item xs={4}>
          <ResultsCard />
        </Grid>
        <Grid item xs={4}>
          <VoteCard />
        </Grid>
      </Grid>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  background-color: rgba(74, 74, 74, 1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default LandingPage;