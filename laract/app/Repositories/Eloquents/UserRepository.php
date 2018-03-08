<?php

namespace App\Repositories\Eloquents;

use App\Repositories\Contracts\UserRepositoryInterface;
use App\User;

class UserRepository extends AbstractRepository implements UserRepositoryInterface
{
    public function model()
    {
        return new User;
    }

    public function getUser()
    {
        return $this->model()::all();
    }

    public function create(array $data)
    {
        return $this->model()->create($data);
    }

    public function edit($id)
    {
        return $this->model()->findOrFail($id);
    }

    public function update(array $data, $id)
    {
        return $this->model()->where('id', '=', $id)->update($data);
    }

    public function delete($id)
    {
        return $this->model()->findOrFail($id)->delete();
    }
}
