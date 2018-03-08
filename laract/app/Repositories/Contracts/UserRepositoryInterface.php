<?php

namespace App\Repositories\Contracts;

interface UserRepositoryInterface extends RepositoryInterface
{
    public function getUser();
    public function create(array $data);
    public function edit($id);
    public function update(array $data, $id);
    public function delete($id);
}
