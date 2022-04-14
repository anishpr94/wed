import React from 'react'
import {Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const TableExamplePagination = () => (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Contact</Table.HeaderCell>
          <Table.HeaderCell>Relation</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
          <Table.Row>
              <Table.Cell>Ramachandra Rao</Table.Cell>
              <Table.Cell><a href="tel:9945114793">9945114793</a></Table.Cell>
              <Table.Cell>Bride's Father</Table.Cell>
          </Table.Row>
          <Table.Row>
              <Table.Cell>Nagaraj Puthraya</Table.Cell>
              <Table.Cell><a href="tel:9535200490">9535200490</a></Table.Cell>
              <Table.Cell>Bride's Uncle</Table.Cell>
          </Table.Row>
          <Table.Row>
              <Table.Cell>Sukanya Rao</Table.Cell>
              <Table.Cell><a href="tel:8217256638">8217256638</a></Table.Cell>
              <Table.Cell>Bride's Mother</Table.Cell>
          </Table.Row>
          <Table.Row>
              <Table.Cell>Sharan Rao</Table.Cell>
              <Table.Cell><a href="tel:8904845600">8904845600</a></Table.Cell>
              <Table.Cell>Bride's Brother</Table.Cell>
          </Table.Row>
        <Table.Row>
          <Table.Cell>Ramachandran N</Table.Cell>
          <Table.Cell><a href="tel:9447814769">9447814769</a></Table.Cell>
          <Table.Cell>Groom's Father</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Anish P R</Table.Cell>
            <Table.Cell><a href="tel:9496461938">9496461938</a></Table.Cell>
          <Table.Cell>Groom</Table.Cell>
        </Table.Row>

      </Table.Body>
    </Table>
)

export default TableExamplePagination
