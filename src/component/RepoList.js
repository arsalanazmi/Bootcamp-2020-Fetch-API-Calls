import React from 'react';

export const RepoList = ({repoData}) => {
    return (
        <div>
            <li>
            <a href={repoData.html_url}>{repoData.name}</a>
            </li>
        </div>
    );
};