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
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiDatePicker,
  EuiPanel
} from '@elastic/eui';
import moment from 'moment';


export class LseEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }  
  render() {
    return (
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiHeaderSectionItem>
              <EuiTitle>
                <h2>MAY-31-2018 - IAD12 Lightening Strike LSE</h2>
              </EuiTitle>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>

            </EuiHeaderSectionItem>

          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiFlexGroup>
            <EuiFlexItem grow={3} fullWidth>
              <EuiFormRow label="Name" helpText="Name the lse" fullWidth>
                <EuiFieldText fullWidth />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFormRow hasEmptyLabelSpace>
                <EuiButton>Save</EuiButton>
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFormRow label="Start" helpText="Start time of LSE">
                <EuiDatePicker
                  showTimeSelect
                  selected={this.state.startDate}
                  onChange={this.handleChange}                  
                />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem >
              <EuiPanel
                betaBadgeLabel={"Filter"}
                betaBadgeTooltipContent={
                  'Build filters for LSE'
                }
                onClick={() => window.alert('Card clicked')}>
                I am some panel content
              </EuiPanel>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}
