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
  EuiBasicTable,
  EuiHealth
} from '@elastic/eui';
import moment from 'moment';

// https://github.com/elastic/elastic-charts/tree/v13.0.0
// import { EUI_CHARTS_THEME_DARK, EUI_CHARTS_THEME_LIGHT } from '@elastic/eui/dist/eui_charts_theme';
// import { Axis, BarSeries, Chart, Settings } from '@elastic/charts';


export const Table = () => {

  const columns = [
    {
      field: 'account',
      name: 'Account',
      sortable: true,
    },
    {
      field: 'domain',
      name: 'Domain',
    },
    {
      field: 'state',
      name: 'State',
      dataType: 'boolean',
      render: state => {
        const color = !state ? 'success' : 'danger';
        const label = !state ? 'Closed' : 'Active';
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
    },
  ];

  const items = [
    {
      id: '1',
      account: '1234567890123',
      domain: 'aws-es-cp-log',
      state: true
    },
    {
      id: '2',
      account: '1234567890123',
      domain: 'aes-es-clickstream',
      state: false
    },
    {
      id: '3',
      account: '1234567890123',
      domain: 'aws-es-dataplane-log',
      state: false
    }
  ]

  const getRowProps = item => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      className: 'customRowClass',
      onClick: () => console.log(`Clicked row ${id}`),
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: 'customCellClass',
      'data-test-subj': `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  return (
    <EuiBasicTable
      items={items}
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
  );
}


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

  updateTable() {
    console.log('hello');
    debugger
    items[0].account = '9876543210987';
  }

  onToggleChange(e) {
    this.state.isLoading = e.target.checked;
    // this.setState({ startDate: moment(), isLoading: e.target.checked });
  }

  componentDidMount() {
  }

  render() {
    this.state.isLoading = true;

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
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem >
              <EuiSuperDatePicker />
              <EuiSpacer />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiPanel>
                <EuiStat
                  title="8,888"
                  description="Total Domains"
                  textAlign="right"
                  isLoading={this.state.isLoading}
                  onClick={() => this.updateTable()}
                >
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
                  isLoading={this.state.isLoading}
                  onClick={() => window.alert('create new LSE')}
                >
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
          <EuiFlexGroup>
            <EuiFlexItem >
              <EuiSpacer />
              <Table />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}
