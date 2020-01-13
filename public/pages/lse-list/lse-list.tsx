import React from 'react';
import {
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiBasicTable,
  EuiTitle,
  EuiHealth,
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
      field: 'createAt',
      name: 'Created At',
      dataType: 'date',
    },
    {
      field: 'updateAt',
      name: 'Last Updated At',
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
      createAt: Date.now(),
      updateAt: Date.now(),
      state: true
    },
    {
      id: '2',
      description: 'IAD 8/31 LSE',
      createdBy: 'huanji',
      createAt: Date.now(),
      updateAt: Date.now(),
      state: false
    },
    {
      id: '3',
      description: 'MAY-31-2018 - IAD12 Lightening Strike LSE',
      createdBy: 'huanji',
      createAt: Date.now(),
      updateAt: Date.now(),
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
            <EuiTitle>
              <h2>Content title</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <Table />
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}
