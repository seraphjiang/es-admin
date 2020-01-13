import React from 'react';
import {
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiBasicTable,
  EuiTitle,
  EuiHealth,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderSectionItem,
} from '@elastic/eui';

export const Table = () => {
  const columns = [
    {
      field: 'description',
      name: 'Description',
      sortable: true,
    },
    {
      field: 'createdBy',
      name: 'Created By',
    },
    {
      field: 'startAt',
      name: 'Started At',
      dataType: 'date',
    },
    {
      field: 'endAt',
      name: 'Ended At',
      dataType: 'date',
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
      description: '2019-12-18 KaOS LSE',
      createdBy: 'huanji',
      startAt: Date.now(),
      endAt: Date.now(),
      state: true
    },
    {
      id: '2',
      description: 'IAD 8/31 LSE',
      createdBy: 'huanji',
      startAt: Date.now(),
      endAt: Date.now(),
      state: false
    },
    {
      id: '3',
      description: 'MAY-31-2018 - IAD12 Lightening Strike LSE',
      createdBy: 'huanji',
      startAt: Date.now(),
      endAt: Date.now(),
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


export class LseList extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {

    return (

      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiHeaderSectionItem>
              <EuiTitle>
                <h2>AES us-east-1(IAD) LSE Tool</h2>
              </EuiTitle>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>

            </EuiHeaderSectionItem>

          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={() => window.alert('create new LSE')}
                iconType="addDataApp">
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem>
              <Table />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}
