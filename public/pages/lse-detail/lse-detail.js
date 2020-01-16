import React from 'react';
import {
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderSectionItem,
  EuiStat,
  EuiPanel,
  EuiIcon,
  EuiSuperDatePicker,
  EuiSpacer,
  Fragment,
  EuiFormControlLayoutDelimited,
  EuiText,
  EuiFilterGroup,
  EuiFilterButton,
  EuiPopover,
  EuiPopoverTitle,
  EuiFieldSearch,
  EuiFilterSelectItem,
  EuiLoadingChart,
} from '@elastic/eui';
import moment from 'moment';

// https://github.com/elastic/elastic-charts/tree/v13.0.0
// import { EUI_CHARTS_THEME_DARK, EUI_CHARTS_THEME_LIGHT } from '@elastic/eui/dist/eui_charts_theme';
// import { Axis, BarSeries, Chart, Settings } from '@elastic/charts';

export class LseDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      isLoading: false,
    };

    this.isDarkTheme = true;

    this.handleChange = this.handleChange.bind(this);
    this.onToggleChange = this.onToggleChange.bind(this);
    // setTimeout(() => {
    //   this.handleChange(moment());
    // }, 2000);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      isLoading: false,
      recentlyUsedRanges: [],
      isLoading: false,
      start: 'now-30m',
      end: 'now',
    });
  }

  onToggleChange(e) {
    this.state.isLoading = e.target.checked;
    // this.setState({ startDate: moment(), isLoading: e.target.checked });
  }


  // onTimeChange = ({ start, end }) => {
  //   this.setState(prevState => {
  //     const recentlyUsedRanges = prevState.recentlyUsedRanges.filter(
  //       recentlyUsedRange => {
  //         const isDuplicate =
  //           recentlyUsedRange.start === start && recentlyUsedRange.end === end;
  //         return !isDuplicate;
  //       }
  //     );
  //     recentlyUsedRanges.unshift({ start, end });
  //     return {
  //       start,
  //       end,
  //       recentlyUsedRanges:
  //         recentlyUsedRanges.length > 10
  //           ? recentlyUsedRanges.slice(0, 9)
  //           : recentlyUsedRanges,
  //       isLoading: true,
  //     };
  //   }, this.startLoading);
  // };

  // onRefresh = ({ start, end, refreshInterval }) => {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, 100);
  //   }).then(() => {
  //     console.log(start, end, refreshInterval);
  //   });
  // };

  // onStartInputChange = e => {
  //   this.setState({
  //     start: e.target.value,
  //   });
  // };

  // onEndInputChange = e => {
  //   this.setState({
  //     end: e.target.value,
  //   });
  // };

  // startLoading = () => {
  //   setTimeout(this.stopLoading, 1000);
  // };

  // stopLoading = () => {
  //   this.setState({ isLoading: false });
  // };

  // onRefreshChange = ({ isPaused, refreshInterval }) => {
  //   this.setState({
  //     isPaused,
  //     refreshInterval,
  //   });
  // };

  // renderTimeRange = () => {
  //   return (
  //     <Fragment>
  //       <EuiPanel paddingSize="m">
  //         <EuiText size="s">
  //           EuiSuperDatePicker should be resilient to invalid date values. You
  //           can try to break it with unexpected values here.
  //         </EuiText>
  //         <EuiSpacer />
  //         <EuiFormControlLayoutDelimited
  //           prepend={<EuiFormLabel>Dates</EuiFormLabel>}
  //           startControl={
  //             <input
  //               onChange={this.onStartInputChange}
  //               type="text"
  //               value={this.state.start}
  //               placeholder="start"
  //               className="euiFieldText"
  //             />
  //           }
  //           endControl={
  //             <input
  //               onChange={this.onEndInputChange}
  //               type="text"
  //               placeholder="end"
  //               value={this.state.end}
  //               className="euiFieldText"
  //             />
  //           }
  //         />
  //       </EuiPanel>
  //     </Fragment>
  //   );
  // };

  componentDidMount() {
  }

  // handleChange(date) {
  //   this.setState({
  //     startDate: date,
  //   });
  // }
  render() {
    this.state.isLoading = true;
    // const items = [
    //   { name: 'Johann Sebastian Bach', checked: 'on' },
    //   { name: 'Wolfgang Amadeus Mozart', checked: 'on' },
    //   { name: 'Antonín Dvořák', checked: 'off' },
    //   { name: 'Dmitri Shostakovich' },
    //   { name: 'Felix Mendelssohn-Bartholdy' },
    //   { name: 'Franz Liszt' },
    //   { name: 'Franz Schubert' },
    //   { name: 'Frédéric Chopin' },
    //   { name: 'Georg Friedrich Händel' },
    //   { name: 'Giuseppe Verdi' },
    //   { name: 'Gustav Mahler' },
    //   { name: 'Igor Stravinsky' },
    //   { name: 'Johannes Brahms' },
    //   { name: 'Joseph Haydn' },
    //   { name: 'Ludwig van Beethoven' },
    //   { name: 'Piotr Illitch Tchaïkovsky' },
    //   { name: 'Robert Schumann' },
    //   { name: 'Sergej S. Prokofiew' },
    //   { name: 'Wolfgang Amadeus Mozart' },
    // ];

    // const button = (
    //   <EuiFilterButton
    //     iconType="arrowDown"
    //     onClick={this.onButtonClick.bind(this)}
    //     isSelected={this.state.isPopoverOpen}
    //     numFilters={items.length}
    //     hasActiveFilters={true}
    //     numActiveFilters={2}>
    //     Composers
    //   </EuiFilterButton>
    // );

    return (
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiHeaderSectionItem>
              <EuiTitle>
                <h2>MAY-31-2018 - IAD12 Lightening Strike LSE</h2>
              </EuiTitle>
            </EuiHeaderSectionItem>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiFlexGroup>
            {/* <EuiSearchBar /> */}

            {/* <EuiSelectable>
            </EuiSelectable> */}
          </EuiFlexGroup>

          <EuiFlexGroup>
            <EuiFlexItem >
              <EuiSuperDatePicker />
              <EuiSpacer />
              {/* <EuiSwitch
                label="Show as loading"
                checked={this.state.isLoading}
                onChange={this.onToggleChange}
              /> */}

            </EuiFlexItem>
          </EuiFlexGroup>


          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiPanel>
                <EuiStat
                  title="8,888"
                  description="Total Domains"
                  textAlign="right"
                  isLoading={this.state.isLoading}>
                  <EuiIcon type="empty" />
                </EuiStat>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiPanel>
                <EuiStat
                  title="2,000"
                  description="Total Impacted Domains"
                  titleColor="accent"
                  textAlign="right"
                  isLoading={this.state.isLoading}>
                  <EuiIcon type="clock" color="accent" />
                </EuiStat>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiPanel>
                <EuiStat
                  title="6,800"
                  description="Health Domains"
                  titleColor="secondary"
                  textAlign="right"
                  isLoading={this.state.isLoading}>
                  <EuiIcon type="check" color="secondary" />
                </EuiStat>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiPanel>
                <EuiStat
                  title="88"
                  description="Impacted Domains Now"
                  titleColor="danger"
                  textAlign="right"
                  isLoading={this.state.isLoading}>
                  <EuiIcon type="alert" color="danger" />
                </EuiStat>
              </EuiPanel>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}
