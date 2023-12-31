import { Table } from '@radix-ui/themes';

export function RouteDetailTable({ data }: { data: any }) {
  return (
    <Table.Root variant="surface" size="3">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Port</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Dock</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ETA</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ETA Time</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ETD</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ETD Time</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data?.map((item: any) => (
          <Table.Row>
            <Table.RowHeaderCell>{item?.port}</Table.RowHeaderCell>
            <Table.Cell>{item?.dock}</Table.Cell>
            <Table.Cell>{item?.eta}</Table.Cell>
            <Table.Cell>{item?.etaTime}</Table.Cell>
            <Table.Cell>{item?.etd}</Table.Cell>
            <Table.Cell>{item?.etdTime}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
