'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RoleSeeder {
  async run() {
    const idGerencUsers = await Database.table('roles').returning('id').insert(
      [
        {
          'slug': 'gerenc_users',
          'name': 'Gerenciar Usuarios',
          'description': 'Será capaz de gerenciar todos os usuarios'
        }
      ]
    )

    const idClientsStore = await Database.table('permissions').returning('id').insert(
      {
        'slug': 'clients_store_permissions',
        'name': 'Store Clients',
        'description': 'Pode inserir clientes'
      }
    )
    console.log('idClientsStore', idClientsStore);

    const idClientsUpdate = await Database.table('permissions').returning('id').insert(
      {
        'slug': 'clients_update_permissions',
        'name': 'Update Clients',
        'description': 'Pode alterar clientes'
      }
    )
    console.log('idClientsUpdate', idClientsUpdate);

    const idClientsDelete = await Database.table('permissions').returning('id').insert(
      {
        'slug': 'clients_delete_permissions',
        'name': 'Delete Clients',
        'description': 'Pode deletar clientes'
      }
    )
    console.log('idClientsDelete', idClientsDelete);

    const idClientsIndex = await Database.table('permissions').returning('id').insert(
      {
        'slug': 'clients_index_permissions',
        'name': 'Index Clients',
        'description': 'Pode buscar todos os clientes'
      }
    )
    console.log('idClientsIndex', idClientsIndex);

    const idClientsShow = await Database.table('permissions').returning('id').insert(
      {
        'slug': 'clients_show_permissions',
        'name': 'Show Clients',
        'description': 'Pode buscar clientes pelo id'
      }
    )
    console.log('idClientsShow', idClientsShow);

    await Database.table('permission_role').returning('id').insert(
      [
        {
          'permission_id': idClientsStore,
          'role_id': idGerencUsers
        },
        {
          'permission_id': idClientsUpdate,
          'role_id': idGerencUsers
        },
        {
          'permission_id': idClientsDelete,
          'role_id': idGerencUsers
        },
        {
          'permission_id': idClientsIndex,
          'role_id': idGerencUsers
        },
        {
          'permission_id': idClientsShow,
          'role_id': idGerencUsers
        }
      ]
    )

  }
}

module.exports = RoleSeeder
